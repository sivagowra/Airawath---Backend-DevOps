import redis
import time

r = redis.Redis(host="redis", port=6379)

while True:
    task = r.lpop("tasks")

    if task:
        print("Processing task:", task)

    time.sleep(5)