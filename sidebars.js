module.exports = {
  docs: {
    'About': [
      'welcome',
      'links',
    ].map( x => `about/${x}` ),
    'Setup': [
      'getting-started',
      'control-node',
      'worker-nodes',
      'user-config',
      'dashboard',
      'helm',
      'operators-and-openebs',
      'jsonnet-and-prometheus',
      'metallb',
      'nginx-ingress',
      'exploring-pods',
    ].map( x => `setup/${x}` ),
    'Concepts': [
      'control-plane',
      'operators',
      'tainting',
    ].map( x => `concepts/${x}` ),
    'Applications': [
      'argocd',
      'cert-manager',
    ].map( x => `apps/${x}` ),
  },
};
