@echo off
SETLOCAL

:: ��ȡ��ǰ����������·��
SET InfluxdP==%~dp0

:: ����influxdb���񣬷�������˿�8086
echo "����influxdb����"
cd /d %InfluxdP=%
influxd -config influxdb.conf

ENDLOCAL