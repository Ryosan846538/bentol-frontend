/* -*- coding: utf-8 -*- */
/*
  block.c
  2022/06/23
*/
#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <string.h>


int main(void) {
  char buf[1024];

  /*    fcntl(0, F_SETFL, O_NONBLOCK); */
  for(;;) {
    printf("? ");
    memset((void*)buf, 0, 1024);
    scanf("%1023s", buf);
    printf("buf: %s\n", buf);
  }
  return 0;
}
