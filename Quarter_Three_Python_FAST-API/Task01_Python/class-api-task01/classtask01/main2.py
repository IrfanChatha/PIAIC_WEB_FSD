from typing import Optional
from sqlmodel import Field, SQLModel, create_engine


class Students(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    age: Optional[int] = None


engine = create_engine(
    "postgres://postgres.hywbkhkmqqaxbrqozsrw:12345todosapp12345@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres")


SQLModel.metadata.create_all(engine)
