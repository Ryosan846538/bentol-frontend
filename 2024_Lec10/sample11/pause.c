/* -*- coding: utf-8 -*- */
/*
  pause.c
  2024/06/18
*/
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>


/* シグナルハンドラ */
void sigint(int p) {
  printf("Receive SIGINT: %d\n", p);
  /*  exit(0); */
  return;
}


int main(int argc, char **argv, char **envp) {
  struct sigaction act;

  act.sa_handler = sigint; /* シグナルハンドラ(関数ポインタ) */
  sigemptyset(&act.sa_mask); /* マスクのクリア */
  sigaddset(&act.sa_mask, SIGALRM); /* マスクの設定 */
  /* act.sa_flags = SA_RESTART; */ /* フラグの設定 */
  sigaction(SIGINT, &act, NULL); /* シグナルの設定本体 */

  printf("press any key\n");
  for(;;) {
    pause();
  }
  printf("done\n");

  return 0;
}
