// first pattern in python

//             * * * * *
//             * * * * *
//             * * * * *
//             * * * * *
//             * * * * *

class JavaPatterns {

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

    }

} 