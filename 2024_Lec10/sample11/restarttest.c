/* -*- coding: utf-8 -*- */
/*
  restarttest.c
  2022/06/23
*/
#include <stdio.h>
#include <unistd.h>
#include <signal.h>
#include <sys/time.h>
#include <string.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>


void sigtimer(int);


void sigtimer(int p) {
  return;
}


int main(int argc, char **argv, char **envp) {
  char str[1024];
  struct sigaction act;
  struct itimerval value, ovalue;

  act.sa_handler = sigtimer;
  sigemptyset(&act.sa_mask);
  act.sa_flags = SA_RESTART; /* SIGALRM 処理後に scanf を再開 */
  /* act.sa_flags = 0; */ /* SIGALRM 処理後に scanf を終了 */
  sigaction(SIGALRM, &act, NULL);

  value.it_value.tv_usec = 0;
  value.it_value.tv_sec = 2;
  value.it_interval.tv_usec = 0;
  value.it_interval.tv_sec = 2;
  setitimer(ITIMER_REAL, &value, &ovalue);

  for(;;){
    memset((void*)str, 0, 1024);
    scanf("%1023s", str);
    printf("::: %s\n", str);
  }

  return 0;
}

