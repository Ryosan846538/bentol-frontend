#

CC=gcc
OPTS=-O2 -Wall #-DDEBUG

all: block  restarttest  sigalrm  sigchld  sigint sendsignal pause

block: block.c
	$(CC) $(OPTS) block.c -o block

restarttest: restarttest.c
	$(CC) $(OPTS) restarttest.c -o restarttest

sigalrm: sigalrm.c
	$(CC) $(OPTS) sigalrm.c -o sigalrm

sigchld: sigchld.c
	$(CC) $(OPTS) sigchld.c -o sigchld

sigint: sigint.c
	$(CC) $(OPTS) sigint.c -o sigint

sendsignal: sendsignal.c
	$(CC) $(OPTS) sendsignal.c -o sendsignal

pause: pause.c
	$(CC) $(OPTS) pause.c -o pause

clean:
	-rm -f $(OBJS) core block  restarttest  sigalrm  sigchld  sigint \
	sendsignal pause *.o

