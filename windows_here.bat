@echo off
cd /d %~dp0
cd ./bats/
start /min cmd /k Call mongodb.bat
choice /c yn /m "restore database mock data?"
if %errorlevel% equ 1 start /wait cmd /k Call mongorestore.bat

start cmd /k Call node.bat
exit