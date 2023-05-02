# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Install any needed packages specified in requirements.txt
COPY requirements.txt /requirements.txt

# Install PostgreSQL development files
RUN apt-get update && apt-get install -y libpq-dev gcc && \
    pip install --no-cache-dir -r /requirements.txt && \
    apt-get autoremove -y gcc && apt-get clean

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY ./src /app

# Make port 3004 available to the world outside this container
EXPOSE 3004

# Define environment variable
ENV DATABASE_URL postgresql://gabuntu:gabuntuPassword@db:5432/mydb

# Run main.py when the container launches
CMD ["python", "app.py"]
