from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_pipelines():
    return {'status': 'ok'}
