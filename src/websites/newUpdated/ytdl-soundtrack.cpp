#include <cstdio>
#include <iostream>
#include <memory>
#include <stdexcept>
#include <string>
#include <array>
#include <fstream>
#include <cstring>
#include <vector>
#include <cctype>
#include <locale>
#include <algorithm>

std::vector<std::string>
split(
        const std::string& input,
        const std::string& delims)
{
    std::vector<std::string> ret;
    for (size_t start = 0, pos; ; start = pos + 1) {
        pos = input.find_first_of(delims, start);
        std::string token = input.substr(start, pos - start);
        if (token.length() > 0)  // ignore empty tokens
            ret.push_back(token);
        if (pos == std::string::npos) break;
    }
    return ret;
}


using namespace std;
vector<string> amountOccured(string str, string needle){
char *p;

    // split the string by spaces in a
    vector<string> a = split(str, " ");
    vector<string> occur;
    // search for pattern in a
    int c = 0;
    for (int i = 0; i < a.size(); i++){
        if (needle == a[i]) {
            occur.push_back(a[i+1]);
        }
    }
    return occur;
}

string exec(string command) {
   char buffer[256];
   string result = "";

   // Open pipe to file
   FILE* pipe = popen(command.c_str(), "r");
   if (!pipe) {
      return "popen failed!";
   }

   // read till end of process:
   while (!feof(pipe)) {

      // use buffer to read and add to result
      if (fgets(buffer, 256, pipe) != NULL)
         result += buffer;
   }

   pclose(pipe);
   return result;
}

int main(int argc, char ** argv){
     string cmd = "ytdl ";
     string c = "ytdl -i ";
     c.append(argv[1]);
     string info = exec(c);
     string title = info.substr(7).substr(0,info.substr(7).find('\n'));
     title.erase(remove_if(title.begin(), title.end(), [](char c) { return !isalpha(c); } ), title.end());
     cmd.append(argv[1]);
     cmd.append(" > " + title + ".mp4");
     cout << system(cmd.c_str());
     exec("ffmpeg -y -i " + title + ".mp4 -map 0:1 -c copy -c:a mp3 " + title + ".mp3");
     cout << title;
     string out = exec("ffmpeg -i " + title + ".mp3 -af silencedetect=n=-50dB:d=2 -f null - 2>&1");
     cout << out;
     vector<string> start = amountOccured(out.c_str(), "silence_start:");
     vector<string> send = amountOccured(out.c_str(), "silence_end:");
     for(int i = 0; i < start.size(); i++){
        start[i] = start[i].substr(0, start[i].find('[')-1);
     }

     for(int i = 0; i < start.size(); i++){
         string command = "ffmpeg -to ";
         command.append(start[i]);
         command.append(" -ss ");
         if(i == 0){
            command.append("0");
         }
         else{
            command.append(send[i-1]);
         }
         command.append(" -y -i "  + title + ".mp3 " + title + to_string(i) + ".mp3" );
         exec(command);
         cout << command;
     }
}
