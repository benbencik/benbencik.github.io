{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    ruby
    bundler
    git
    jekyll
  ];

  shellHook = ''
    # Configure bundle for local installation
    bundle config set --local path 'vendor/bundle'
    
    # Run bundle install if the vendor directory doesn't exist
    if [ ! -d "vendor/bundle" ]; then
      echo "Running 'bundle install' for the first time..."
      bundle install
    fi
    
    # Set up bundle path
    export BUNDLE_PATH="vendor/bundle"
    export PATH="$BUNDLE_BIN:$PATH"
    
    echo "Jekyll development environment loaded!"
    echo "Run 'bundle exec jekyll serve' to start the server"
  '';
}