/*
Codeforces 1385C - Make it Good

https://codeforces.com/problemset/problem/1385/C
*/

#include <iostream>
#include <vector>

int main()
{
  int t;
  std::cin >> t;

  while (t--) {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);

    for (auto &i : arr) {
      std::cin >> i;
    }

    auto pos = n - 1;

    while (pos > 0 && arr[pos-1] >= arr[pos]) --pos;
    while (pos > 0 && arr[pos-1] <= arr[pos]) --pos;

    std::cout << pos << '\n';
  }  

  return 0;
}
