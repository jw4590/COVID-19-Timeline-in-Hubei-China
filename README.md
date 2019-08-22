# one-code
that is how
I write more stuff

**Why yes it is!**


function parse_git_branch {
   git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

export PS1="🚀 \e[35m\u@\h\e[0m:\e[32m\$(parse_git_branch)\e[0m \W \$ "
