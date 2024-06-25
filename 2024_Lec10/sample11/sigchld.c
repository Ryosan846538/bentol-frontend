/* -*- coding: utf-8 -*- */
/*
  sigchld.c
  2022/06/23
*/
#include <stdio.h>
#include <unistd.h>
#include <signal.h>
#include <sys/types.h>
#include <sys/wait.h>


void sigchild(int);


void sigchild(int p) {
  int status;

  printf("Receive SIGCHLD: %d\n", p);
  waitpid(-1, &status, 0);

  return;
}


int main(int argc, char **argv, char **envp) {
  int i;
  pid_t pid;
  char str[64];
  struct sigaction act;

  act.sa_handler = sigchild;
  sigemptyset(&act.sa_mask);
  act.sa_flags = SA_NOCLDWAIT | SA_RESTART;
  /* sigchild() で子プロセスの終了を受け取る */
  /* sigaction(SIGCHLD, &act, NULL); */

  for(i = 0; ; i++) {
    pid = fork();
    if(pid == 0) {
      printf("in child\n");
      return 1;
    } else if(pid < 0) {
      printf("fork() error\n");
    }
    scanf("%s", str);
  }

  return 0;
}
