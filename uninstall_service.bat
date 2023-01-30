@echo off
echo Stopping services...
.\nssm.exe stop Grafana
.\nssm.exe stop InfluxDB
echo Removing Grafana and InfluxDB...
.\nssm.exe remove Grafana confirm
.\nssm.exe remove InfluxDB confirm
timeout /T 3
exit