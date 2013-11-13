
LocatorBuilders.add(‘zk_component_prefix’, function(e) {
if (e.hasAttribute(‘zk_component_prefix’)) {
if (e.getAttribute(‘zk_component_prefix’)) {
return ‘//’ + e.nodeName + ‘[@zk_component_prefix=\'' +
e.getAttribute("zk_component_prefix") + '\']‘;
}
}
return null;
});
