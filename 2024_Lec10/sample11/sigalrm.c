/* -*- coding: utf-8 -*- */
/*
  sigalrm.c
  2022/06/23
*/
#include <stdio.h>
#include <unistd.h>
#include <signal.h>
#include <sys/time.h>


void sigtimer(int);


/* シグナルハンドラ */
void sigtimer(int p) {
  printf("Receive SIGALRM: %d\n", p);
  return;
}


int main(int argc, char **argv, char **envp) {
  struct sigaction act;
  struct itimerval value, ovalue;

  act.sa_handler = sigtimer; /* シグナルハンドラ(関数ポインタ) */
  sigemptyset(&act.sa_mask); /* マスクのクリア */
  act.sa_flags = 0; /* フラグの設定(無し) */
  sigaction(SIGALRM, &act, NULL); /* シグナルの設定本体 */

  /* 初回のタイマー(秒) */
  value.it_value.tv_sec = 2;
  /* 初回のタイマー(マイクロ秒) */
  value.it_value.tv_usec = 0;
  /* 2回目以降のタイマー(秒) */
  value.it_interval.tv_sec = 2;
  /* 2回目以降のタイマー(マイクロ秒) */
  value.it_interval.tv_usec = 0;
  /* タイマーの設定と開始 */
  setitimer(ITIMER_REAL, &value, &ovalue);

  for(;;){
    pause();
  }

  return 0;
}
