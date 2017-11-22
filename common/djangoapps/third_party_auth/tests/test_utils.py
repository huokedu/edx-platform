"""
Tests for third_party_auth utility functions.
"""
import unittest

import ddt
from django.conf import settings
from third_party_auth.tests.testutil import TestCase
from third_party_auth.utils import user_exists
from student.tests.factories import UserFactory


# remove this decorator once third_party_auth is enabled in CMS
@unittest.skipIf(
    'third_party_auth' not in settings.INSTALLED_APPS,
    'third_party_auth is not currently installed in CMS'
)
@ddt.ddt
class TestUtils(TestCase):
    """
    Test the utility functions.
    """

    @ddt.data(
        (
            lambda: UserFactory(username='test_user', email='test_user@example.com'),
            {'username': 'test_user'},
            True
        ),
        (
            lambda: UserFactory(username='test_user', email='test_user@example.com'),
            {'email': 'test_user@example.com'},
            True
        ),
        (
            lambda: UserFactory(username='test_user', email='test_user@example.com'),
            {'username': 'test_user', 'email': 'test_user@example.com'},
            True
        ),
        (
            lambda: UserFactory(username='test_user', email='test_user@example.com'),
            {'username': 'invalid_user'},
            False
        ),
        (
            lambda: UserFactory(username='test_user', email='test_user@example.com'),
            {},
            False
        ),
        (
            lambda: None,
            {'username': 'test_user', 'email': 'test_user@example.com'},
            False
        ),
        (
            lambda: None,
            {},
            False
        ),
    )
    @ddt.unpack
    def test_user_exists(self, user_factory, details, expected_result):
        """
        Verify that user_exists function returns correct response.
        """
        # Create users from factory
        user_factory()
        self.assertEqual(user_exists(details), expected_result)
