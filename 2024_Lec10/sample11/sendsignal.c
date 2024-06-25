/* -*- coding: utf-8 -*- */
/*
  sendsignal.c
  2024/06/04
*/
#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <signal.h>


int main(int argc, char **argv, char **envp) {
  pid_t pid = -1;
  int sig = SIGTERM;

  if(argc != 2) {
    return 1;
  }
  pid = atoi(argv[1]);
  printf("Sent signal: %d, to %d\n", sig, pid);
  kill(pid, sig);

  return 0;
}
