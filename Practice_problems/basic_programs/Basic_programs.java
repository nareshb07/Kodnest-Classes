public class Basic_programs {

    static void palindrome(int number) {
        int x = number;
        int reversed_num = 0;
        while (number!=0) {
            int last_digit = number % 10;
            reversed_num = reversed_num*10 + last_digit;
            number = number/10;
        }
        if (x == reversed_num) {
            System.out.println(x + " is a palindrome number");
        } else {
            System.out.println(x + " is not a palindrome number");
        }
    }

    static void checkNumber(int number) {
        if (number > 0) {
            System.out.println(number + " is a positive number.");
        } else if (number < 0) {
            System.out.println(number + " is a negative number.");
        } else {
            System.out.println(number + " is zero.");
        }
    }
     

     public static void main(String[] args) {
        checkNumber(0);
        palindrome(121);
        palindrome(124);
    
}

}