from supabase import create_client, Client
import os
from fastapi import FastAPI

app = FastAPI(title="Hello World API",
              version="0.0.1",
              servers=[
                  {
                      "url": "http://0.0.0.0:8000",
                      "description": "Development Server"
                  }
              ])


@app.get("/")
def read_root():
    return {"Hello ": "World"}


url: str = os.environ.get(
    "user=postgres.hywbkhkmqqaxbrqozsrw password=12345todosapp12345 host=aws-0-ap-southeast-1.pooler.supabase.com port=5432 dbname=postgres")
key: str = os.environ.get(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5d2JraGttcXFheGJycW96c3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyODEwMDcsImV4cCI6MjAyOTg1NzAwN30.0rl__fjNlzINIe2qn_72xYlGOw0_XNmYeHLp5KTWYro")
supabase: Client = create_client(url, key)


response = supabase.table('table1').select("*").execute()
