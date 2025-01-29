# How to Run Commands

I have created automation scripts in order to ease the development process. I will demonstrate how to run each command.

&nbsp;

&nbsp;

## Make CSS Modules

`npm run make-css-modules`

This command checks all the (.tsx) files inside of the `page` and `component` folders. If any of them reference a (.css) file with the same name, then the CSS file will be created if it does not exist.

&nbsp;

&nbsp;

## Make JS Modules

`npm run make-js-modules`

This commands creates (.tsx) modules inside a specified along with the (.css) files associated with them.

**Command Line Parameters:**

**1st Parameter:** The parent folder path where the module(s) will be created

**2nd Parameter and Up:** The names of the modules to be created + flags.

&nbsp;

**Module Names:**

**Kebab-Case**: If a kebab-case module name is entered (e.g. side-bar), it will create a folder side-bar, then the module SideBar.tsx in it.

**Camel-Case**: If an upper-camel-case module name is entered (e.g. SideBar), it will create SideBar.tsx directly in the parent path.

&nbsp;

**Flags:**

**--p**: Append the subsequent module names with the suffix "Page"

**--s**: Append the subsequent module names with a specified suffix as the next argument

**--ns**: Remove any suffix appendations for subsequent module names

**--c**: Make the subsequent (.tsx) modules contain children

**--nc**: Make the subsequent (.tsx) modules contain no children (default)

&nbsp;

**Example #1:**

`npm run make-js-modules -- page/profile top-nav-menu search-menu --c profile`

This command creates the folders `top-nav-menu`, `search-menu`, and `profile`, and creates the camel-cased modules inside of them with their (.css) files.

&nbsp;

**Example #2:**

`npm run make-js-modules -- page globe home Store`

This command creates the folders `globe` and `home` and the module `Store.tsx` inside `page`, and it creates the modules `Globe.tsx` and `HomePage.tsx` inside their respective folders.
