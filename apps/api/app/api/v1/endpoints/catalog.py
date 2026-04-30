from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_catalog():
    return {'status': 'ok'}
