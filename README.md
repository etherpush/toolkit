<h1 align="center">EtherPush: Push Your Token On Ethereum</h1>

<p align="center">
  <img src="https://cdn.rawgit.com/etherpush/logo/master/logo-large.png" width="300"/>
  <br />
  <a href="https://img.shields.io/badge/branch-master-brightgreen.svg?style=flat-square">
    <img src="https://img.shields.io/badge/branch-master-brightgreen.svg?style=flat-square" />
  </a>
  <a href="https://img.shields.io/badge/license-MIT-blue.svg">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
</p>

---

> [etherpush.io](https://etherpush.io) &nbsp;&middot;&nbsp;
> GitHub [@etherpush](https://github.com/etherpush) &nbsp;&middot;&nbsp;
> Twitter [@etherpush](https://twitter.com/etherpush)

---

* [toolkit](#toolkit)
* [install](#install)
* [commands](#commands)
    * [fetchmeta](#fetchmeta)
    * [readme](#readme)
    * [status](#status)

# toolkit
[etherpush.io](https://etherpush.io) toolkit to help people play ethereum :)


# install
Thanks to the npm, You can install the ethepush toolkit by `npm install -g etherpush`

# commands

## fetchmeta

Fetch the <meta> of specified URL as the following:

```
❯ etherpush fetchmeta https://ethereum.org
{
    "title": "Ethereum Project",
    "desc": "Ethereum is a decentralized platform for applications that run exactly as programmed without any chance of fraud, censorship or third-party interference.",
    "website": "https://ethereum.org"
}
```

## readme

Output the template of etheprush.io's README document as the following:

```
❯ etherpush readme

<h1 align="center">EtherPush: Push Your Token On Ethereum</h1>

<p align="center">
  <img src="https://cdn.rawgit.com/etherpush/logo/master/logo-large.png" width="300"/>
  <br />
  <a href="https://img.shields.io/badge/branch-master-brightgreen.svg?style=flat-square">
    <img src="https://img.shields.io/badge/branch-master-brightgreen.svg?style=flat-square" />
  </a>
  <a href="https://img.shields.io/badge/license-MIT-blue.svg">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
</p>

---

> [etherpush.io](https://etherpush.io) &nbsp;&middot;&nbsp;
> GitHub [@etherpush](https://github.com/etherpush) &nbsp;&middot;&nbsp;
> Twitter [@etherpush](https://twitter.com/etherpush)

---
```

## status

The status of https://etherpush.io

```
❯ etherpush status                                                 48s 336ms
https://etherpush.io is online
```
