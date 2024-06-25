/* -*- coding: utf-8 -*- */
/*
  sigint.c
  2022/06/23
*/
#include <stdio.h>
#include <stdlib.h>
#include <strings.h>
#include <unistd.h>
#include <signal.h>
#include <string.h>


void sigint(int);
void sigstop(int);
void sigterm(int);


/* シグナルハンドラ */
void sigint(int p) {
  printf("Receive SIGINT: %d\n", p);
  /* exit(0); */
  return;
}


/* シグナルハンドラ */
void sigterm(int p) {
  printf("Receive SIGTERM: %d\n", p);
  /* exit(0); */
  return;
}


int main(int argc, char **argv, char **envp) {
  struct sigaction act;
  char buf[1024];

  act.sa_handler = sigint; /* シグナルハンドラ(関数ポインタ) */
  sigemptyset(&act.sa_mask); /* マスクのクリア */
  sigaddset(&act.sa_mask, SIGALRM); /* マスクの設定 */
  /* act.sa_flags = SA_RESTART; */ /* フラグの設定 */
  sigaction(SIGINT, &act, NULL); /* シグナルの設定本体 */

  act.sa_handler = sigterm; /* シグナルハンドラ(関数ポインタ) */
  sigemptyset(&act.sa_mask); /* マスクのクリア */
  sigaddset(&act.sa_mask, SIGALRM); /* マスクの設定 */
  /* act.sa_flags = SA_RESTART; */ /* フラグの設定 */
  sigaction(SIGTERM, &act, NULL); /* シグナルの設定本体 */

  for(;;){
    memset((void*)buf, 0, 1024);
    read(0, buf, 1023);
    printf("read: %s\n", buf);
  }

  return 0;
}
