#include <bits/stdc++.h>
using namespace std;


int main(){

    fstream fin("input.txt",ios::app);
    int key = rand()%26;
    if(fin){
        char c;
        while(c!='~'){
            cin>>c;
            c+=key;
            fin<<c;
        }
    }
    fin.close();

    
    int test;
    cout<<"Input key: ";
    cin>>test;
fstream fout("input.txt",ios::app);
    if(fout){
        char c;
        while(fout.get(c)){
            c-=test;
            cout<<c;
        }
        
    }
    fout.close();
    
}