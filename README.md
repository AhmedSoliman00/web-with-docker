


# How to Run API

To run the API, follow these steps:

1. Build the Docker image:
   ```bash
   docker-compose build
   ```

2. Start the Docker container:
   ```bash
   docker-compose up
   ```

# How to Run Client

To run the client, follow these steps:

1. Build the Docker image:
   ```bash
   docker build -t cloud-client .
   ```

2. Run the Docker container:
   ```bash
   docker run -d -p 8080:8080 --name cloud-client cloud-client

   ```

```

