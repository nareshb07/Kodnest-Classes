

class JavaPatterns {

    // Sixth pattern in python

    // * * * * *
    // * * * *
    // * * *
    // * *
    // *

    static void pattern5(int rows){
        System.out.println("Printing pattern 5");
        for(int i = rows;i>=1; i--) {
            for (int j = 1; j <= i; j++){
                System.out.print("* ");
            }
        System.out.println();
        }
    }

    // Fifth pattern in python

    // 1
    // 2 2
    // 3 3 3
    // 4 4 4 4
    // 5 5 5 5 5

    static void pattern4(int rows){
        for(int i = 1; i<=rows; i++) {
            for (int j = 1; j <= i; j++){
                System.out.print(i + " ");
            }
        System.out.println();
        }
    }

            // Fourth pattern in python

            //  1
            //  1 2
            //  1 2 3
            //  1 2 3 4
            //  1 2 3 4 5

    static void pattern3(int rows) {
        for(int i = 1; i<=rows; i++) {
            for (int j = 1; j <= i; j++){
                System.out.print(j + " ");
            }
        System.out.println();
        }
    }


    // Third pattern in python

    // *
    // * *
    // * * *
    // * * * *
    // * * * * *


    static void pattern2(int rows) {
        for (int i = 1; i<=rows;i++ ) {
            for (int j = 1; j<=i ; j++) {
                System.out.print("* ");

            }
            System.out.println();
        }
    }

            // Second pattern in python

            // 1 1 1 1 1 
            // 2 2 2 2 2
            // 3 3 3 3 3
            // 4 4 4 4 4


    static void pattern1(int rows){

        for (int i = 1 ; i<=rows; i++) {
            
            for(int j = 1; j <= rows; j++) {
                System.out.print(i + " ");
            }
        System.out.println();
        }

    }

    // first pattern in python

//             * * * * *
//             * * * * *
//             * * * * *
//             * * * * *
//             * * * * *
    static void pattern(int rows){

        for (int i = 1 ; i<=rows; i++) {
            
            for(int j = 1; j <= rows; j++) {
                System.out.print("* ");
            }
        System.out.println();
        }
    }




    public static void main(String[] args) {
       
       pattern(5);
       pattern1(5);
       pattern2(5);
       pattern3(5);
       pattern4(5);
       pattern5(5);

    }

} 