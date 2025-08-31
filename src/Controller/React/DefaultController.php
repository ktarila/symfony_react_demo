<?php

/*
 * This file is part of PTDF Symfony Application.
 * (c) PTDF <dev@ptdf.gov.ng>.
 */

namespace App\Controller\React;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DefaultController extends AbstractController
{
    #[
        Route(
            '/{reactRouting}',
            name: 'app_react',
            requirements: ['reactRouting' => '^(?!api|twig|_(profiler|wdt)).*'],
            defaults: ['reactRouting' => 'home']
        )
    ]
    public function app(): Response
    {
        /** @var User $user * */
        $user = $this->getUser();
        $fullname = '';
        if (null !== $user) {
            $fullname = $user->getEmail();
        }

        return $this->render('app/index.html.twig', [
            'isAuthenticated' => json_encode(!empty($user)),
            'roles' => json_encode(!empty($user) ? $user->getRoles() : []),
            'fullname' => $fullname,
        ]);
    }
}
