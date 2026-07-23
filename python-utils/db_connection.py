"""
ZaniQ IWMS - Database Connection Utility
Connects to the same PostgreSQL database as the Node.js backend
"""

import os
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class DatabaseConnection:
    """PostgreSQL database connection manager"""

    def __init__(self):
        self.database_url = os.getenv('DATABASE_URL')
        if not self.database_url:
            raise ValueError("DATABASE_URL environment variable not set")

        # Create SQLAlchemy engine
        self.engine = create_engine(self.database_url)
        self.SessionLocal = sessionmaker(bind=self.engine)

    def get_session(self):
        """Get a new database session"""
        return self.SessionLocal()

    def test_connection(self):
        """Test database connection"""
        try:
            with self.engine.connect() as conn:
                result = conn.execute(text("SELECT 1"))
                print("✅ Database connection successful!")
                return True
        except Exception as e:
            print(f"❌ Database connection failed: {e}")
            return False

    def get_work_orders(self, limit=100):
        """Fetch work orders from database"""
        with self.get_session() as session:
            query = text("""
                SELECT id, title, status, priority, created_at
                FROM "WorkOrder"
                ORDER BY created_at DESC
                LIMIT :limit
            """)
            result = session.execute(query, {"limit": limit})
            return result.fetchall()

    def get_assets(self, limit=100):
        """Fetch assets from database"""
        with self.get_session() as session:
            query = text("""
                SELECT id, name, type, status, location
                FROM "Asset"
                ORDER BY name
                LIMIT :limit
            """)
            result = session.execute(query, {"limit": limit})
            return result.fetchall()


if __name__ == "__main__":
    # Test connection
    db = DatabaseConnection()
    db.test_connection()

    print("\nFetching sample data...")
    try:
        work_orders = db.get_work_orders(5)
        print(f"Found {len(work_orders)} work orders")

        assets = db.get_assets(5)
        print(f"Found {len(assets)} assets")
    except Exception as e:
        print(f"Note: Tables might not exist yet: {e}")
