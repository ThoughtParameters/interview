import pytest
from httpx import ASGITransport, AsyncClient
from main import app

# Mark all tests in this file as async
pytestmark = pytest.mark.asyncio

async def test_read_root():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}
