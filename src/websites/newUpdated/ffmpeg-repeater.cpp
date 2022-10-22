#include <iostream>
#include <vector>
#include <fstream>

using namespace std;

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

int main(int argc, char** argv){
    if(argc == 3){
        ofstream file;
        file.open("list.txt");
        for(int i = 0; i < atoi(argv[1]); i++){
            file << "file '" <<  argv[2] << "'\n";
        }
        file.close();
        exec("ffmpeg -f concat -safe 0 -i list.txt -c copy \"repeated_" + string(argv[2]) + "\"");
    }
    else{
        cout << "Arguments: Number of times to repeat | File";
    }
    return 0;
}
