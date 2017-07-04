/**
 * Created by Michael on 15/06/2017.
 */

suite('"About" Page Tests', function(){
    test('page should contain link to contact page', function(){
        assert($('a[href="/contact"]').length);
    });
});
