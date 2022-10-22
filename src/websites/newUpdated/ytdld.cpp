#include <iostream>
#include <vector>

using namespace std;

std::vector<std::string> //not stackoverflow im pretty sure
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

vector<string> amountOccured(string str, string needle){ //stackoverflow!!!
char *p;

    // split the string by spaces in a
    vector<string> a = split(str, "\t\n");
    vector<string> occur;
    // search for pattern in a
    int c = 0;
    for (int i = 0; i < a.size(); i++){
        if (a[i].find(needle) != std::string::npos) {
            occur.push_back(a[i].substr(needle.size()));
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
    string out = exec("ytdl -i " + string(argv[1]));
    string cmd = "ytdl " + string(argv[1]);
    vector<string> filename;
    filename.push_back(amountOccured(out.c_str(), "title: ")[0]);
    cout << filename[0];
    system(cmd.c_str());
    cout << exec("ffmpeg -i \"" + filename[0] + ".mp4\" -map 0:a \"" + filename[0] + ".mp3\"");
    return 0;
}
