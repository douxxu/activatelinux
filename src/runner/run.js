#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

function isthatstupidchromiumthinginstalled() {
  try {
    execSync('electron --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function install_e_chromium() {
  console.log("Electron isn't globally installed. Installing...");
  execSync('sudo npm install -g electron', { stdio: 'inherit' });
}

function Elec() {
  const projectDir = path.resolve(__dirname, '..');
  console.log("Thanks for using *ActivateLinux*")
  console.log("Made by github.com/douxxu")
  execSync(`electron ${projectDir}`, { stdio: 'inherit' });
}

if (!isthatstupidchromiumthinginstalled()) {
  install_e_chromium();
}

Elec();
