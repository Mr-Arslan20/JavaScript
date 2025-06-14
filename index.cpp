// #include <iostream>
// #include <cmath>   // Needed for squareroot.
// using namespace std;

// int main() {
//     float side1, side2, side3;

//     cout << "Enter side 1 of triangle: ";
//     cin >> side1;
//     cout << "Enter side 2 of triangle: ";
//     cin >> side2;
//     cout << "Enter side 3 of triangle: ";
//     cin >> side3;
//     float s = (side1 + side2 + side3) / 2;
//      float area = sqrt(s * (s - side1) * (s - side2) * (s - side3));
//      cout << "Area of the triangle = " << area << endl;
//      return 0;
// }

#include <iostream>
#include <cmath>
using namespace std;
int main()
{
    float side1,side2,side3,area,s;
    cout<<"enter the sides"<<endl;
    cin>>side1>>side2>>side3;
    s=(side1+side2+side3)/2;
    area=sqrt(s*(s-side1)* (s-side2) *(s-side3));
    cout<<"area of triangle is "<<area<<endl;
     return 0;
}