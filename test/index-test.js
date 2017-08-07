"use strict";

const
    join = require( 'path' ).join,
    helpers = require( 'yeoman-test' ),
    assert = require( 'yeoman-assert' );

let tmpDir;

describe( 'generator-git-setup', function() {

    before( function() {
        return helpers.run( join( __dirname, "../generators/app" ) )
            .inTmpDir( function( dir ) { tmpDir = dir; } )
            .withOptions( { skipInstall: true, commit: 'Initial commit', repository: 'some-repo' } );
    } );

    it( 'should do its thing', function() {
        assert.file( '.git' );
        assert.file( '.git/config' );
    } );

} );

