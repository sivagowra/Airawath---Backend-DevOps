from fastapi import APIRouter

router = APIRouter()

@router.get("/api/users")
def get_users():
    return {
        "users": ["siva", "devops", "engineer"]
    }