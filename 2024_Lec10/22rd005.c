#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>
#include <string.h>
#include <sys/time.h> // 追加

volatile sig_atomic_t input_received = 0;
char input[256]; // グローバル変数に変更

void check_input(int signum)
{
    if (input_received)
    {
        // input_received flagをリセット
        input_received = 0;

        // 入力をファイルに書き込む
        FILE *file = fopen("output.txt", "a");
        if (file == NULL)
        {
            perror("Error opening file");
            exit(EXIT_FAILURE);
        }
        fprintf(file, "%s\n", input);
        fclose(file);

        // 再度プロンプトを表示
        printf("Enter text: ");
        fflush(stdout);
    }
    else
    {
        printf("No input received. Enter text: ");
        fflush(stdout);
    }
}

int main()
{
    // シグナルハンドラを設定
    struct sigaction sa;
    sa.sa_handler = &check_input;
    sa.sa_flags = SA_RESTART;
    sigaction(SIGALRM, &sa, NULL);

    // タイマーを2秒ごとに設定
    struct itimerval timer;
    timer.it_value.tv_sec = 2;
    timer.it_value.tv_usec = 0;
    timer.it_interval.tv_sec = 2;
    timer.it_interval.tv_usec = 0;
    setitimer(ITIMER_REAL, &timer, NULL);

    // 初回のプロンプトを表示
    printf("Enter text: ");
    fflush(stdout);

    while (1)
    {
        if (fgets(input, sizeof(input), stdin) != NULL)
        {
            input[strcspn(input, "\n")] = 0; // 改行を削除
            input_received = 1;
        }
    }

    return 0;
}