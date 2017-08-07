"use strict";

const
    join = require( 'path' ).join,
    fs = require( 'fs' ),
    helpers = require( 'yeoman-test' ),
    assert = require( 'yeoman-assert' ),
    expect = require( 'chai' ).expect;

describe( 'generator-git-setup', function() {

    before( function() {
        helpers.run( join( __dirname, "../generators/app" ) )
            .withOptions( { skipInstall: true, commit: 'Initial commit', repository: 'some-repo' } );
    } );

    it( 'should do its thing', function() {
        assert.file( '.git' );
        expect( fs.statSync( join( '.', '.git' ) ) ).to.exist;
    } );

} );

