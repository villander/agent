History
=======
## 0.2.3

* Implemented HRRN Wake Scheduling
* Implemented Inline Agent Inheritance
* Implemented General Exception Handling
* Implemented Micro-Container Framing
* Implemented Agent and Behaviour Properties
* Implemented Agent WoT Descriptions
* Implemented Micro-container Auditing
* Implemented Oldest, Newest, Furthest and Closest Filters
* Implemented getContainer Closure
* Improved Flow Behaviours Referencing
* Dropped on prefix on standard response method names
* Dropped Parent of Parent in ThreadId
* Dropped Automatic import of Parent Micro-Container Delegates
* Fixed FilterStates Bug
* Fixed MapReduce Empty Mapping Bug


## 0.2.2

* Implemented HRRN action() and Message Scheduling
* Implemented JSON-LD Ontology Definitions and Message Translation
* Implemented MapReduce Behaviour
* Implemented Inline Methods
* Flow Behaviour changes: implicit yielding and Flow Methods can now be removed out of line
* Newly created Micro-containers are populated with parent container abstract delegates
* Micro-containers and Sources are now identified with getThreadId()
* The V8 getThreadId() uses prepareStackTrace() for Backtracing (faster than exceptions)
* More efficient memory usage in most use cases

## 0.2.1

* Added Micro-containers
* Annotation Bugfix

## 0.2.0

* Split source file into modules
* Added MQTT Transport
* Selector Bugfix

## 0.1.1

* Fixed $thing global
* Added Heartbeat Agent
* Improvements to the Waker Behaviour

## 0.1.0

* Initial release