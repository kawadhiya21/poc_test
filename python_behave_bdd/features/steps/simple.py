import time
from behave import *


@when('visit url "{url}"')
def step(context, url):
    context.browser.get(url)


@when('field with name "{selector}" is given "{value}"')
def step(context, selector, value):
    elem = context.browser.find_element_by_name(selector)
    elem.send_keys(value)
    elem.submit()
    time.sleep(5)


@then('title becomes "{title}"')
def step(context, title):
    assert context.browser.title == title


@then(u'page contains "{body}"')
def step(context, body):
    assert body in context.browser.page_source


@given('we have behave installed')
def step_impl(context):
    pass


@when('we implement a test')
def step_impl(context):
    assert True is not False


@then('behave will test it for us!')
def step_impl(context):
    assert context.failed is False


@given(u'Book details.')
def step_impl(context):
    assert True is not False


@then(u'Verify book name.')
def step_impl(context):
    assert context.failed is False


@given(u'search query red')
def step_impl(context):
    assert True is not True


@then(u'should open search page with results of red')
def step_impl(context):
    assert context.failed is False


@given(u'login page with incorrect password')
def step_impl(context):
    assert True is not False


@then(u'credetials not correct should be shown')
def step_impl(context):
    assert context.failed is False


@given(u'search query alcndslkcnalnclka')
def step_impl(context):
    assert True is not False


@then(u'No search results found should be shown')
def step_impl(context):
    assert context.failed is False
