cd /d %~dp0
cd ./bats/
start cmd /wait /k Call mongodb.bat
start cmd /wait /k Call node.bat
start cmd /wait /k Call ext.bat
exit