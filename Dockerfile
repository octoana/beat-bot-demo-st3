FROM python:3.10
ENV password="ffjsdlkvij4j&*(*("
COPY . /
RUN pip install -r requirements.txt

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
