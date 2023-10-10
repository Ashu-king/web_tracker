// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;
void allDivison(int x){
    vector<int> ls;
    for(int i = 0; i<=sqrt(x); i++){
        if(x % i==0){
            ls.push_back(i);
            if((x/i)!=i){
            ls.push_back(x/i);
        }
            
           
        }
        
    }
    sort(ls.begin(), ls.end());
    for(auto it : ls) cout<<it<<" ";
    
    }
int main() {
    int n;
    cin>>n;
    allDivison(n);

    return 0;
}