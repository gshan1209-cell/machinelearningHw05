"""API payloads must satisfy the published summary-to-detail study contract."""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_ten_summaries_resolve_to_complete_study_notes():
    response = client.get('/api/algorithms/')
    assert response.status_code == 200
    summaries = response.json()
    assert len(summaries) == 10
    assert len({item['slug'] for item in summaries}) == 10
    for summary in summaries:
        assert 'description' not in summary
        response = client.get('/api/algorithms/' + summary['slug'])
        assert response.status_code == 200
        detail = response.json()
        assert detail['slug'] == summary['slug']
        assert isinstance(detail['description'], str) and detail['description']
        for field in ('how_it_works', 'use_cases', 'pros', 'cons'):
            assert detail[field] and all(isinstance(value, str) and value for value in detail[field])
        assert len(detail['quiz']) == 3
        for quiz in detail['quiz']:
            assert quiz['question'] and quiz['explanation']
            assert quiz['answer'] in quiz['options']

def test_missing_algorithm_is_a_404_not_an_incomplete_summary():
    assert client.get('/api/algorithms/not-a-real-algorithm').status_code == 404
