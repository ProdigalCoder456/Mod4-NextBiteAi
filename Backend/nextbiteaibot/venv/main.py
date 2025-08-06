# fastapi server

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import find_similar_recipes, generate_recipe_gemini

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # replace with frontend domain 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    ingredients: list
    conditions: list = []

@app.post("/chat")
def get_recipe(data: ChatRequest):
    similar = find_similar_recipes(data.ingredients)
    ai_recipe = generate_recipe_gemini(data.ingredients, similar, data.conditions)
    return {"recipe": ai_recipe}
