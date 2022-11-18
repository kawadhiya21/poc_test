import unittest
import requests
from requests.auth import HTTPBasicAuth

TEST_RUN_ID = 89


def push_result_to_test_rails(test_case_id, result=1):
    response = requests.post("https://breakpoint.testrail.com/index.php?/api/v2/add_result_for_case/{}/{}".format(TEST_RUN_ID,
                                                                                                                  test_case_id),
                             json={"status_id": result},
                             auth=HTTPBasicAuth('bipuljain44@gmail.com', 'H@rryP0tter'))

    print(response.json())


class TestStringMethods(unittest.TestCase):

    def test_upper(self):
        test_case_id = 5022
        self.assertEqual('foo'.upper(), 'FOO')
        push_result_to_test_rails(test_case_id)

    def test_isupper(self):
        test_case_id = 5023
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())
        push_result_to_test_rails(test_case_id)

    def test_split(self):
        test_case_id = 5024
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        push_result_to_test_rails(test_case_id)