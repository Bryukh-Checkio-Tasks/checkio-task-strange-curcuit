from checkio.signals import ON_CONNECT
from checkio import api
from checkio.referees.io import CheckiOReferee
from checkio.referees.cover_codes import unwrap_args, js_unwrap_args
from tests import TESTS

api.add_listener(
    ON_CONNECT,
    CheckiOReferee(tests=TESTS,
                   cover_code={
                       'python-27': unwrap_args,  # or None
                       'python-3': unwrap_args,
                       'js-node':  js_unwrap_args
                   },
                   function_name='find_distance'
    ).on_ready)
