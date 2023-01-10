using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Factorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.WriteLine("Enter The Number");
            a = Convert.ToInt32(Console.ReadLine());
            int fact = 1;
            for(int i = 1; i<=a; i++)
            {
                fact = fact * i;
            }
            Console.WriteLine("The factorial is"+fact);
            Console.ReadLine();
        }
    }
}
