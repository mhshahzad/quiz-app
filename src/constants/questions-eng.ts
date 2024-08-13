export const QuestionsEnglish = [
  {
    question:
      'Which of the following is a valid variable name according to C identifier naming rules?',
    options: ['int', 'n_exists?', 'Sum', 'My%percent'],
    correct: 'Sum'
  },
  {
    question:
      'Which of the following logical  expressions has the value false if a and b\n' +
      'have been declared as follows? int a=5, b=2;',
    options: ['(a >= b)&&(b != 0)', '(a % b)||(b == 0)', '1 || !0', '(b - 2 != 0)'],
    correct: '(b - 2 != 0)'
  },
  {
    question:
      'Fill in the blanks: the program finds the multiplication of two variables if\n' +
      'the first one of these variables is greater\n' +
      ' than the second, otherwise calculate summation of these numbers?\n' +
      '……………………\n' +
      'result= num1*num2;\n' +
      '……………………\n' +
      'result= num1+num2;\n',
    options: [
      'if (num1>num2) – else',
      'if (num1<num2) – else if',
      'if (num1<num2) – else if (num1>num2)',
      'while (num1>num2) – else'
    ],
    correct: 'if (num1>num2) – else;'
  },
  {
    question:
      'Given the following code segment:\n' +
      'switch (ch){\n' +
      "case 'A': area=side*side;\n" +
      '          printf("Area is %d", area);\n' +
      '          break;\n' +
      "case 'P': perimeter=4*side;\n" +
      '          printf("Perimeter is %d", perimeter);\n' +
      '          break;\n' +
      'default:\n' +
      '          printf ("Wrong input!");\n' +
      '}\n' +
      'Assume the side is 4 and ch is ‘a’ what will be the output?',
    options: ['Area is 16', 'Perimeter is 16', 'Wrong input!', 'None of them'],
    correct: 'Wrong input!'
  },
  {
    question:
      'Suppose you want to print the double variable profit right-justified by\n' +
      'using two decimal places after the decimal\n' +
      'point. Which one of these printf statements will do?',
    options: [
      'printf("\\nYour profit is %6.4f Turkish liras \\n", profit);',
      'printf("\\nYour profit is %7.2f Turkish liras \\n", profit);',
      'printf("\\nYour profit is %-5.3f Turkish liras \\n", profit);',
      'printf("\\nYour profit is %2.0f Turkish liras \\n", profit);'
    ],
    correct: 'printf("\\nYour profit is %7.2f Turkish liras \\n", profit);'
  },
  {
    question: 'Which of the following loops execute the statements at least once?',
    options: ['While', 'Do...while', 'For', 'Nested Loop'],
    correct: 'Do...while'
  },
  {
    question:
      'What is the output of the following code block program?\n' +
      'int i, j, n=3;\n' +
      'for(i=1; i<=n; i++){\n' +
      'for(j=i; j>=1; j--)\n' +
      'printf(“*”);\n' +
      'printf(“\\n”)\n' +
      ';}\n',
    options: ['*\n' + '**\n' + '***\n', '***\n' + '**\n' + '*\n', '******', '*\n' + '**\n'],
    correct: '*\n' + '**\n' + '***\n'
  },
  {
    question:
      'How many times value of i is checked in the following C code?\n' +
      'int i=1;\n' +
      'while (i<3)\n' +
      'i++;\n' +
      'printf(“In while loop”);\n',
    options: ['1', '2', '3', '4'],
    correct: '3'
  },
  {
    question:
      'findMax is a function that accepts three double parameters and returns no value.\n' +
      'Three double variables num1, num2\n' +
      'and num3, have already been declared and initialized in main.\n' +
      'What is the correct statement that calls findMax by\n' +
      'sending num1, num2 and num3?',
    options: [
      'findMax (num1, num2, num3);',
      'findMax (num1; num2; num3);',
      '* findMax (num1, num2, num3);',
      'findMax (num1, 2, 3);'
    ],
    correct: 'findMax (num1, num2, num3);'
  },
  {
    question:
      'Which one is the correct call statement of a function my_function which accepts two\n' +
      'parameters and returns integer\n' +
      'type variable?',
    options: [
      'ch = my_function();',
      'int my_function ();',
      'int num = my_function (a, b);',
      'int num = my_function ();'
    ],
    correct: 'int num = my_function (a, b);'
  }
];
